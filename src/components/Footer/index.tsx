import Contact from "../../Contact";

export default function Footer() {
    return (
        
        <footer className="w-full flex flex-col items-center py-8 gap-4">
            <h2 id="contact" className="m-3 p-2 text-3xl md:text-4xl leading-8 flex flex-col items-center gap-5">
                ME CONTATE
            </h2>
           
            <Contact />
        </footer>
    );
}