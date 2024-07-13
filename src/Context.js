import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useToast } from '@chakra-ui/react';

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {

    const printElem = useRef();
    const toast = useToast();

    const [theme, setTheme] = useState('purple.400');

    const [about, setAbout] = useState({
        name: "",
        role: "",
        email: "",
        phone: "",
        address: "",
        linkedin: "",
        picture: "",
    });

    const [educationList, setEducationList] = useState([{
        id: "",
        degree: "",
        school: "",
        startYr: 0,
        endYr: 0,
        grade: "",
    }, ]);

    const [skills, setSkills] = useState([{
            id: 1,
            name: "Skill 1",
        },
        {
            id: 2,
            name: "Skill 2",
        },
        {
            id: 3,
            name: "Skill 3",
        },
        {
            id: 4,
            name: "Skill 4",
        },
        {
            id: 5,
            name: "Skill 5",
        },
        {
            id: 6,
            name: "Skill 6",
        },
        {
            id: 7,
            name: "Skill 7",
        },
        {
            id: 8,
            name: "Skill 8",
        },
        {
            id: 9,
            name: "Skill 9",
        },
        {
            id: 10,
            name: "Skill 10",
        },
        {
            id: 11,
            name: "Skill 11",
        },
        {
            id: 12,
            name: "Skill 12",
        },
        {
            id: 13,
            name: "Skill 13",
        },
        {
            id: 14,
            name: "Skill 14",
        },
        {
            id: 15,
            name: "Skill 15",
        },
        {
            id: 16,
            name: "Skill 16",
        },
    ]);

    const [workList, setWorkList] = useState([{
        id: "",
        position: "",
        company: "",
        type: "",
        startDate: "",
        endDate: "",
        description: "",
    }, ]);

    const [projects, setProjects] = useState([{
        id: "",
        name: "",
        description: "",
        url: "",
    }, ]);


    // useEffect(() => {
    //     toast({
    //         title: `${theme.split(".", 1)} selected`,
    //         status: 'success',
    //         isClosable: true,
    //       })
    // }, [theme]);

    const value = { about, setAbout, educationList, setEducationList, skills, setSkills, workList, setWorkList, projects, setProjects, printElem, theme, setTheme };

    return ( <
        ResumeContext.Provider value = { value } > { children } <
        /ResumeContext.Provider>
    )
}