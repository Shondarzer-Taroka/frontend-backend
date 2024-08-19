import { CgAbstract } from "react-icons/cg";
const FooterPage = () => {
    return (
        <section className=" bg-black text-white p-11">

            <aside className="flex gap-6 flex-wrap  justify-between">
                <div>
                    <h1 className="font-bold">Abstract</h1>
                    <p>Branches</p>
                </div>
                <div>
                    <h1 className="font-bold">Resources</h1>
                    <p>Blog</p>
                    <p>Help center</p>
                    <p>Release Notes</p>
                    <p>Status</p>
                </div>
                <div>
                    <h1 className="font-bold">Community</h1>
                    <p>Twitter</p>
                    <p>Linkedin</p>
                    <p>Dribble</p>
                    <p>Podcast</p>
                </div>
                <div>
                    <h1 className="font-bold">Company</h1>
                    <p>About us</p>
                    <p>Carees</p>
                    <p>Legal</p>

                    <h1 className="font-bold">Contact us</h1>
                    <p>info@abstract.com</p>
                </div>
                <div className="mt-16">
                    <h1 className="font-bold">
                    <CgAbstract className="text-black bg-white w-[24px] h-[24px] rounded-lg" />
                    </h1>
                    <p>&copy;Copyright2022</p>
                    <p>Abstract studion design, Inc</p>
                    <p>All rights reserved</p>
                </div>
            </aside>
        </section>

    );
};

export default FooterPage;