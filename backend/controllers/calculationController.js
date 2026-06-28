import Calculation from '../models/Calculation.js';

// @desc    Create a new calculation
// @route   POST /api/calculations
export const createCalculation = async (req, res, next) => {
  try {
    const { num1, num2, operation } = req.body;
    const n1 = Number(num1);
    const n2 = Number(num2);

    let result;
    switch (operation) {
      case '+': result = n1 + n2; break;
      case '-': result = n1 - n2; break;
      case '*': result = n1 * n2; break;
      case '/': result = n1 / n2; break;
      default: result = 0;
    }

    const expression = `${n1} ${operation} ${n2}`;

    const calculation = await Calculation.create({
      userId: req.user._id,
      expression,
      result,
    });

    res.status(201).json({
      _id: calculation._id,
      expression: calculation.expression,
      result: calculation.result,
      createdAt: calculation.createdAt,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user calculation history
// @route   GET /api/calculations
export const getHistory = async (req, res, next) => {
  try {
    const calculations = await Calculation.find({ userId: req.user._id })
      .sort({ createdAt: -1 }); // Newest first

    res.json(calculations);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a single calculation
// @route   DELETE /api/calculations/:id
export const deleteCalculation = async (req, res, next) => {
  try {
    const calculation = await Calculation.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!calculation) {
      res.status(404);
      throw new Error('Calculation not found');
    }

    await Calculation.deleteOne({ _id: req.params.id });
    res.json({ message: 'Calculation deleted' });
  } catch (error) {
    next(error);
  }
};

// @desc    Clear all user history
// @route   DELETE /api/calculations
export const clearHistory = async (req, res, next) => {
  try {
    await Calculation.deleteMany({ userId: req.user._id });
    res.json({ message: 'All history cleared' });
  } catch (error) {
    next(error);
  }
};