"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listingSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.listingSchema = new mongoose_1.default.Schema({
    lokacija: { type: String },
    adresa: { type: String },
    nazivOglasa: { type: String },
    tipNekretnine: { type: String },
    cena: { type: Number },
    kvadratura: { type: Number },
    brojSoba: { type: String },
    godinaIzgradnje: { type: String },
    stanjeNekretnine: { type: String },
    tipGrejanja: { type: String },
    sprat: { type: String },
    mesecneRezije: { type: Number },
    karakteristike: [{ type: String }],
    linije: [{ type: String }],
});
//# sourceMappingURL=ListingSchema.js.map