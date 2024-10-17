export const GenderOptions = ["male", "female", "other"];

export const APIServerURL ='http://localhost:5000/api/v1'

export const catigoryList =[
  {
    name: "Dermatologist",
    value: "dermatologist",
    url: "/skin.png",
  },
  {
    name: "Allergist",
    value: "allergist",
    url: "/allergy.png",
  },
  {
    name: "Gastroenterologist",
    value: "gastroenterologist",
    url: "/Gastroenterologist.png",
  },
  {
    name: "Neurologist",
    value: "neurologist",
    url: "/neurologist.png",
  },
  {
    name: "Cardiologist",
    value: "cardiologist",
    url: "/cardiologist.png",
  },
  {
    name: "Gynecologist",
    value: "gynecologist",
    url: "/gynecologist.png",
  },
  {
    name: "Pediatrician",
    value: "pediatrician",
    url: "/pediatrician.png",
  },
  {
    name: "Hepatologist",
    value: "hepatologist",
    url: "/hepatologist.png",
  },
  {
    name: "Osteopathic",
    value: "osteopathic",
    url: "/osteopathic_.png",
  },
  {
    name: "Endocrinologist",
    value: "endocrinologist",
    url: "/endocrinologist.png",
  },
  {
    name: "Pulmonologist",
    value: "pulmonologist",
    url: "/pulmonologist.png",
  },
  {
    name: "Internal Medicine",
    value: "internal medicine",
    url: "/internal_medicine.png",
  },
  {
    name: "Common Cold",
    value: "common cold",
    url: "/common_cold.png",
  },
  {
    name: "Phlebologist",
    value: "phlebologist",
    url: "/phlebologist.png",
  },
  {
    name: "Osteoarthritis",
    value: "osteoarthritis",
    url: "/osteoarthritis.png",
  },
  {
    name: "Rheumatologists",
    value: "rheumatologists",
    url: "/rheumatologists.png",
  },
  {
    name: "Otolaryngologist",
    value: "otolaryngologist",
    url: "/otolaryngologist.png",
  },
];

export const doctorlist = [
  {
    id: 1,
    url: "/beautiful-young-female-doctor-looking-camera-office.jpg",
    Name: "Nore Ali",
    Year_of_Experience: "15 Years",
    Address: "Cairo",
    specialization: "Orthopedics"
  },
  {
    id: 2,
    url: "/assets/doctors/1.jpg",
    Name: "Mohammed Ali",
    Year_of_Experience: "10 Years",
    Address: "Cairo",
    specialization: "Internal Medicine"
  },
  {
    id: 3,
    url: "/assets/doctors/2.png",
    Name: "Mohammed Ali",
    Year_of_Experience: "15 Years",
    Address: "Cairo",
    specialization: "Radiology"
  },
  {
    id: 4,
    url: "/assets/doctors/3.jpg",
    Name: "Mohammed Ali",
    Year_of_Experience: "15 Years",
    Address: "Cairo",
    specialization: "Orthopedics"
  },
  {
    id: 5,
    url: "/assets/doctors/4.jpg",
    Name: "Mohammed Ali",
    Year_of_Experience: "15 Years",
    Address: "Cairo",
    specialization: "Orthopedics"
  },
  {
    id: 6,
    url: "/assets/doctors/5.jpg",
    Name: "Mohammed Ali",
    Year_of_Experience: "15 Years",
    Address: "Cairo",
    specialization: "Orthopedics"
  },
  {
    id: 7,
    url: "/assets/doctors/6.jpg",
    Name: "Mohammed Ali",
    Year_of_Experience: "15 Years",
    Address: "Cairo",
    specialization: "Orthopedics"
  },
  {
    id: 8,
    url: "/assets/doctors/7.jpg",
    Name: "Mohammed Ali",
    Year_of_Experience: "15 Years",
    Address: "Cairo",
    specialization: "Orthopedics"
  },
  {
    id: 9,
    url: "/assets/doctors/8.avif",
    Name: "Mohammed Ali",
    Year_of_Experience: "15 Years",
    Address: "Cairo",
    specialization: "Orthopedics"
  },
  {
    id: 10,
    url: "/assets/doctors/9.avif",
    Name: "Mohammed Ali",
    Year_of_Experience: "15 Years",
    Address: "Cairo",
    specialization: "Orthopedics"
  },
  {
    id: 11,
    url: "/assets/doctors/10.png",
    Name: "Mohammed Ali",
    Year_of_Experience: "15 Years",
    Address: "Cairo",
    specialization: "Orthopedics"
  },
  {
    id: 12,
    url: "/assets/doctors/11.png",
    Name: "Mohammed Ali",
    Year_of_Experience: "15 Years",
    Address: "Cairo",
    specialization: "Orthopedics"
  },
  {
    id: 13,
    url: "/assets/doctors/12.png",
    Name: "Mohammed Ali",
    Year_of_Experience: "15 Years",
    Address: "Cairo",
    specialization: "Orthopedics"
  },
  {
    id: 14,
    url: "/assets/doctors/13.png",
    Name: "Mohammed Ali",
    Year_of_Experience: "15 Years",
    Address: "Cairo",
    specialization: "Orthopedics"
  },
  {
    id: 15,
    url: "/assets/doctors/14.png",
    Name: "Mohammed Ali",
    Year_of_Experience: "15 Years",
    Address: "Cairo",
    specialization: "Orthopedics"
  },
]

export const PatientFormDefaultValues = {
name:"",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "John Green",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Cameron",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livingston",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Evan Peter",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jane Powell",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Ramirez",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};