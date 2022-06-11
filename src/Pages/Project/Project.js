import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVectorSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/fontawesome-free-brands';

const Project = () => {

    const { id } = useParams();

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/project.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    const exists = projects.find(project => project?.id == id);
    console.log(exists)


    return (
        <section className='py-10'>
            <div className='w-full sm:w-11/12 mx-auto px-4 sm:px-6'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl text-primary text-center font-bold pb-8'>Project : {exists?.name}</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 bg-gray-200 mb-6'>
                    <img className='rounded-sm' src={exists?.main} alt="mainImage" />
                    <img className='rounded-sm' src={exists?.second} alt="mainImage" />
                    <img className='rounded-sm' src={exists?.third} alt="mainImage" />
                </div>
                <div className='p-6 bg-gray-200'>
                    <p style={{ fontSize: '18px' }}>{exists?.description}</p>
                    <ul className='py-6 ml-8'>
                        {
                            exists?.features?.map((feature, index) =>
                                <li key={index} className='list-disc'>{feature}</li>
                            )
                        }
                    </ul>
                    <h4 style={{ fontFamily: 'Merienda' }} className='text-2xl text-primary font-semibold'>Technologies Used</h4>
                    <p className='pt-5'>
                        {
                            exists?.technologies?.map((technology, index) => <span key={index}>
                                <span className='btn px-6 mr-2 py-0 mb-2'>{technology}</span>
                            </span>)
                        }
                    </p>
                    <div className='pt-4'>
                        <ExternalLink style={{ fontFamily: 'Merienda' }} className='text-xl font-semibold pr-4' target='_blank' href={`${exists?.live}`}><FontAwesomeIcon className='font-awesome text-primary text-xl' icon={faVectorSquare}></FontAwesomeIcon> Live Site </ExternalLink>
                        <ExternalLink style={{ fontFamily: 'Merienda' }} className='text-xl font-semibold px-4' target='_blank' href={`${exists?.git}`}><FontAwesomeIcon className='font-awesome text-primary text-xl' icon={faGithub}></FontAwesomeIcon> Git Link </ExternalLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;