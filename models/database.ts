import {connect} from 'mongoose';
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1"])

export const conn = async function(){
    await connect("mongodb+srv://manohar:singhms@cluster0.cbj5arp.mongodb.net/jhalar?appName=Cluster0")
    console.log("connected to database")
}

