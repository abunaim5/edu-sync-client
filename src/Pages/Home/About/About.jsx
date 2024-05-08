import AboutCard from "./AboutCard";

const About = () => {
    const aboutInfo = [
        {
            img: 'https://i.postimg.cc/cC1dd3Hk/pride.png',
            title: 'Our Mission',
            description: 'Our mission is simple: to make quality education accessible to all students, regardless of their background or circumstances. We believe that every student deserves the opportunity to succeed, and we are committed to providing the support and resources they need to thrive academically.'
        },
        {
            img: 'https://i.postimg.cc/cC1dd3Hk/pride.png',
            title: 'Who We Are',
            description: 'TutorSage was founded by a team of educators and technology enthusiasts who saw the need for a more personalized approach to tutoring. With years of experience in both traditional and online education, we understand the challenges that students face and are dedicated to finding innovative solutions to help them succeed.'
        },
        {
            img: 'https://i.postimg.cc/cC1dd3Hk/pride.png',
            title: 'What We Offer',
            description: "At TutorSage, we offer more than just tutoring sessions we offer a transformative learning experience. Our platform connects students with highly qualified tutors who are experts in their fields, ensuring that each session is tailored to the student's unique learning style and goals."
        },
        {
            img: 'https://i.postimg.cc/cC1dd3Hk/pride.png',
            title: 'Why Choose Us',
            description: "Our tutors undergo a rigorous vetting process to ensure they meet our high standards of expertise and professionalism. We believe that one size does not fit all when it comes to education. That's why we work closely with each student to create a customized learning plan that meets their individual needs and preferences."
        }
    ]


    return (
        <div className="my-24">
            <div className="text-center text-[#0d0d0d] mb-12">
                <h2 className="text-3xl font-bold mb-6">About TutorSage</h2>
                <p className="max-w-3xl mx-auto">At TutorSage, we are dedicated to empowering students to achieve their academic goals and unlock their full potential. Our platform brings together a community of passionate tutors and eager learners, creating a dynamic environment for personalized learning and growth.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    aboutInfo.map((info, idx) => <AboutCard key={idx} info={info} />)
                }
            </div>
        </div>
    );
};

export default About;