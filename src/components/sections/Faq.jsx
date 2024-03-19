import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const Faq = () => {
    return (
        <div className='w-screen min-h-fit flex_center flex-col my-5'>
            <h1 className='text-2xl md:text-4xl font-thin '>Frequently Asked Questions</h1>
            <div className='w-11/12 lg:w-1/2 h-fit my-10 flex glassCard flex-col md:flex-row'>
                <div className='md:w-1/2  mr-0 md:mr-10 p-2'>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Who is this course designed for?</AccordionTrigger>
                            <AccordionContent>
                                This course is designed for aspiring journalists who want to gain practical insights and skills to kickstart their career in journalism.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>What level of experience is required to take this course?</AccordionTrigger>
                            <AccordionContent>
                                This course is suitable for beginners as well as individuals with some prior experience in journalism or related fields.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>What will I learn from this course?</AccordionTrigger>
                            <AccordionContent>
                                In this course, you will learn a wide range of topics essential to journalism, including investigative journalism techniques, storytelling methods, interview skills, ethical considerations, and more.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>How is the course structured?</AccordionTrigger>
                            <AccordionContent>
                                The course is structured as a 2-week online program, with a combination of video lectures, practical exercises, assignments, and interactive discussions.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Will I receive any certification upon completion of the course?</AccordionTrigger>
                            <AccordionContent>
                                Yes, upon successful completion of the course, you will receive a certificate of completion, which can be a valuable addition to your portfolio or resume.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className='md:w-1/2 ml-0 md:ml-10 p-2'><Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is there any prerequisite software or equipment required for the course?</AccordionTrigger>
                        <AccordionContent>
                            No specific software or equipment is required. However, access to a computer with internet connectivity is necessary to participate in the online lectures and activities.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How much time should I expect to dedicate to the course each week?</AccordionTrigger>
                        <AccordionContent>
                            We recommend dedicating approximately 5-7 hours per week to the course to fully engage with the material and complete assignments.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What kind of support is available during the course?</AccordionTrigger>
                        <AccordionContent>
                            Throughout the course, you will have access to support from Mr. Arun and the course instructors, including feedback on assignments and clarification of course materials.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Can I access the course content after the 2-week period?</AccordionTrigger>
                        <AccordionContent>
                            Yes, you will have access to the course materials for a limited time after the completion of the course, allowing you to review and revisit the content as needed.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>How do I enroll in the course?</AccordionTrigger>
                        <AccordionContent>
                            To enroll in the course, simply click on the "Enroll Now" button and follow the instructions provided. If you have any further questions, feel free to contact us for assistance.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Faq