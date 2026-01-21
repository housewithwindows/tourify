const Tour = require("../model/tours.model");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

// Get all tours
const getTours = catchAsync(async (req, res, next) => {
    const tours = await Tour.find();
    res.status(200).json(tours);
});

// Get a single tour
const getTour = catchAsync(async (req, res, next) => {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
        return next(new AppError("Tour not found", 404));
    }
    res.status(200).json(tour);
});

// Create a new tour
const createTour = catchAsync(async (req, res, next) => {
    const { title, description, duration, price } = req.body;

    const newTour = await Tour.create({
        title,
        description,
        duration,
        price,
        createdBy: req.user._id // Assign the owner
    });

    res.status(201).json(newTour);
});

// Delete a tour (only creator can delete)
const deleteTour = catchAsync(async (req, res, next) => {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
        return next(new AppError("Tour not found", 404));
    }

    // Check ownership
    if (!tour.createdBy.equals(req.user._id)) {
        return next(new AppError("You are not allowed to delete this tour", 403));
    }

    await tour.remove();
    res.status(204).send();
});

// Update a tour (only creator can update)
const updateTour = catchAsync(async (req, res, next) => {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
        return next(new AppError("Tour not found", 404));
    }

    // Check ownership
    if (!tour.createdBy.equals(req.user._id)) {
        return next(new AppError("You are not allowed to update this tour", 403));
    }

    const { title, description, duration, price } = req.body;

    tour.title = title || tour.title;
    tour.description = description || tour.description;
    tour.duration = duration || tour.duration;
    tour.price = price || tour.price;

    await tour.save();

    res.status(200).json(tour);
});

module.exports = { getTours, getTour, createTour, deleteTour, updateTour };

