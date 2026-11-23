import NormalHeader from "@/components/NormalHeader";
import Contact from "@/components/ContactPage/Contact";
import Footer from "@/components/Footer";

export const metadata = {
    title: 'Contact | Lectt',
    description: 'The contact page of Lectt'
}

export default function ContactPage() {
    return (
        <div className="w-full flex flex-col items-center">
            <NormalHeader />
            <Contact />
            <Footer />
        </div>
    )
}