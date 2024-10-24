import * as sdk from 'node-appwrite'
export const {
    PROJECT_ID, API_KEY,DATABASE_ID, PATIENT_COLLECTION_ID, DOCTORS_COLLECTION_ID, APPOINTMENTS_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID:BUCKET_ID, NEXT_PUBLIC_ENDPOINT:ENDPOINT,
}= {
PROJECT_ID:"67094256002faa6a7820",
API_KEY:"standard_d2b2402b34015b97c538469a2c492c8e1e856fc8550f1eca241ffc8ec16c34c2920fba13cf77b3f07447f1ff980d1058542b9125ff0309c3e457ab805162a53a87520bed5c5d21e9a8b272f3996eb270b8ba372dc947c344499fc69d011310785831bb0cc8721db14b84f79d19bc3a82af5c662ccf1a22037771f67a05a9d628",
DATABASE_ID:"670943910009c6c0e8d0",
PATIENT_COLLECTION_ID:"67094405001e642fa207",
DOCTORS_COLLECTION_ID:"670944480015735c73d6",
APPOINTMENTS_COLLECTION_ID:"670944d9000cc46fab0f",
NEXT_PUBLIC_BUCKET_ID:"67094817003429122bc1",
NEXT_PUBLIC_ENDPOINT:"https://cloud.appwrite.io/v1",
};

const client = new sdk.Client();

client
.setEndpoint("https://cloud.appwrite.io/v1"!)
.setProject("67094256002faa6a7820"!)
.setKey("standard_d2b2402b34015b97c538469a2c492c8e1e856fc8550f1eca241ffc8ec16c34c2920fba13cf77b3f07447f1ff980d1058542b9125ff0309c3e457ab805162a53a87520bed5c5d21e9a8b272f3996eb270b8ba372dc947c344499fc69d011310785831bb0cc8721db14b84f79d19bc3a82af5c662ccf1a22037771f67a05a9d628"!);
export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const functions = new sdk.Functions(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
