import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Enquiry {
    serviceType: ServiceType;
    name: string;
    email: string;
    message: string;
    preferredDate: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export enum ServiceType {
    bondCleaning = "bondCleaning",
    vacateCleaning = "vacateCleaning",
    carpetCleaning = "carpetCleaning"
}
export interface backendInterface {
    getAllEnquiries(): Promise<Array<Enquiry>>;
    submitEnquiry(name: string, email: string, phone: string, serviceType: ServiceType, preferredDate: string, message: string): Promise<void>;
}
