const CSS = require("../models/CSSModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");

exports.createCSS = catchAsyncError(async (req, res, next) => {
  const css = await CSS.create(req.body);

  res.status(201).json({
    success: true,
    css,
  });
});

exports.getAllCSS = catchAsyncError(async (req, res) => {
  const css = await CSS.find();

  res.status(200).json({
    success: true,
    css,
  });
});

exports.deleteCSS = catchAsyncError(async (req, res, next) => {
  const css = await CSS.findById(req.params.id);

  if (!css) {
    return next(new ErrorHandler("Resource not found!", 404));
  }

  await css.remove();

  res.status(200).json({
    success: true,
    message: "CSS deleted successfully!",
  });
});

exports.getSingleCSS = catchAsyncError(async (req, res, next) => {
  const css = await CSS.findById(req.params.id);

  if (!css) {
    return next(new ErrorHandler("Resource not found!", 404));
  }

  res.status(200).json({
    success: true,
    css,
  });
});
