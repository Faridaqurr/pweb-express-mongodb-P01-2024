import { Request, Response } from 'express';
import mechanismService from '../services/mechanism.service';

// Borrow Book
export const borrowBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id; // Gunakan hanya bookId dari parameter
    const { currentQty } = await mechanismService.borrowBook(bookId); // Tanpa userId

    res.status(200).json({
      status: 'success',
      message: 'Successfully borrowed book',
      data: {
        currentQty,
      },
    });
  } catch (error: any) {
    res.status(400).json({
      status: 'failed',
      message: error.message,
    });
  }
};

// Return Book
export const returnBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id; // Gunakan hanya bookId dari parameter
    const { currentQty } = await mechanismService.returnBook(bookId); // Tanpa userId

    res.status(200).json({
      status: 'success',
      message: 'Successfully returned book',
      data: {
        currentQty,
      },
    });
  } catch (error: any) {
    res.status(400).json({
      status: 'failed',
      message: error.message,
    });
  }
};

// Health Check
export const healthCheck = (req: Request, res: Response) => {
  res.status(200).json({ status: 'up' });
};
