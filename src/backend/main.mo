import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

actor {
  // Persistent data structure
  let persistentEnquiries = List.empty<Enquiry>();

  type ServiceType = {
    #vacateCleaning;
    #bondCleaning;
    #carpetCleaning;
  };

  type Enquiry = {
    name : Text;
    email : Text;
    phone : Text;
    serviceType : ServiceType;
    preferredDate : Text;
    message : Text;
    timestamp : Time.Time;
  };

  public shared ({ caller }) func submitEnquiry(name : Text, email : Text, phone : Text, serviceType : ServiceType, preferredDate : Text, message : Text) : async () {
    let newEnquiry : Enquiry = {
      name;
      email;
      phone;
      serviceType;
      preferredDate;
      message;
      timestamp = Time.now();
    };
    persistentEnquiries.add(newEnquiry);
  };

  public shared ({ caller }) func getAllEnquiries() : async [Enquiry] {
    if (caller.toText() != "aaaaa-aa") {
      Runtime.trap("Unauthorized access. Only the canister owner can retrieve all enquiries.");
    };
    persistentEnquiries.toArray();
  };
};
