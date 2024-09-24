"use client";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

const About = () => {
    return (
        <>
            <section className="flex justify-center gap-x-5 items-center flex-wrap ">
                <Image
                    className=" hover:shadow-xl hover:shadow-slate rounded-full transition ease-linear delay-200 hover:-translate-y-2 hover:-translate-x-2"
                    src="/static/images/mypic.jpg"
                    width={300}
                    height={300}
                />
                <div className="flex flex-col justify-center items-center">
                    <div className="text-rose font-bold"> Manohar Singh </div>
                    <br />
                    <div>
                        {" "}
                        <span className="text-blue-600 font-bold">
                            Skills :
                        </span>{" "}
                        Html, JavaScript, Css ,Mysql, MongoDB, Python, NextJs,
                        Django{" "}
                    </div>
                    <br />
                    <div>
                        {" "}
                        <span className="text-blue-600 font-bold">
                            Projects:
                        </span>{" "}
                        <a
                            className="text-green"
                            href="https://portfolio-silk-one-23.vercel.app"
                            target="_blank"
                        >
                            {" "}
                            Personal Portfolio{" "}
                        </a>
                        ,
                        <a
                            className="text-green"
                            href="https://manoharsignh.pythonanywhere.com"
                            target="_blank"
                        >
                            {" "}
                            Ecommerce Website{" "}
                        </a>
                    </div>
                </div>
            </section>
            <div className="flex justify-center gap-x-3 items-center">
                <SocialIcon
                    className="m-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                    target="_blank"
                    url="https://twitter.com/Manohar46703390"
                />
                <SocialIcon
                    className="m-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                    target="_blank"
                    url="https://www.facebook.com/profile.php?id=100085389642554"
                />
                <SocialIcon
                    className="m-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                    target="_blank"
                    url="https://www.linkedin.com/in/manohar-singh-b14a68148"
                />
            </div>
        </>
    );
};

export default About;
