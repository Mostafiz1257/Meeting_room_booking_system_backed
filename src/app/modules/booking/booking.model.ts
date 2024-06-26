import { Schema, model } from "mongoose";
import { IBooking } from "./booking.interface";


const bookingSchema = new Schema<IBooking>({
    date: { type: String, required: true },
  slots: [{ type: Schema.Types.ObjectId, ref: 'Slot', required: true }],
  room: { type: Schema.Types.ObjectId, ref: 'Room', required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  totalAmount: { type: Number, required: true },
  isConfirmed: { type: String, enum: ['confirmed', 'unconfirmed'], default: 'unconfirmed' },
  isDeleted: { type: Boolean, default: false },
})


export const Booking = model<IBooking>('Booking',bookingSchema)