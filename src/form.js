import React, { useState } from 'react';
import './form.css';

export default function Form() {
  const [enrolledStudents, setEnrolledStudents] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [image, setImage] = useState('');
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState([]);

  const handleEnroll = () => {
    const student = {
      name,
      email,
      website,
      image,
      gender,
      skills,
    };

    setEnrolledStudents([...enrolledStudents, student]);
  };

  const handleClear = () => {
    
    setName('');
    setEmail('');
    setWebsite('');
    setImage('');
    setGender('');
    setSkills([]);
  };

  const handleSkillChange = (skill) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((s) => s !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  };

  return (
    <div>
      <div className='heading-container'>
        <h1>Student Enrollment Form</h1>
      </div>

      <div className='container'>
        <div className='vl'></div>
        <div className='left'>
          <div className='row'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='row'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='row'>
            <label htmlFor='web'>Website</label>
            <input type='url' name='web' id='web' value={website} onChange={(e) => setWebsite(e.target.value)} />
          </div>
          <div className='row'>
            <label htmlFor='img'>Image Link</label>
            <input type='text' name='img' id='img' value={image} onChange={(e) => setImage(e.target.value)} />
          </div>
          <div className='label'>Gender</div>
          <div className='inputs'>
            <div className='input-row'>
              <input
                type='radio'
                name='gender'
                id='MALE'
                checked={gender === 'MALE'}
                onChange={() => setGender('MALE')}
              />
              <label htmlFor='MALE'>Male</label>
            </div>
            <div className='input-row'>
              <input
                type='radio'
                name='gender'
                id='FEMALE'
                checked={gender === 'FEMALE'}
                onChange={() => setGender('FEMALE')}
              />
              <label htmlFor='FEMALE'>Female</label>
            </div>
            <div className='input-row'>
              <input
                type='radio'
                name='gender'
                id='OTHERS'
                checked={gender === 'OTHERS'}
                onChange={() => setGender('OTHERS')}
              />
              <label htmlFor='OTHERS'>Others</label>
            </div>
          </div>
          <div className='label'>Skills</div>
          <div className='input-row'>
            <input
              type='checkbox'
              name='skills'
              id='HTML'
              checked={skills.includes('HTML')}
              onChange={() => handleSkillChange('HTML')}
            />
            <label htmlFor='HTML'>HTML</label>
          </div>
          <div className='input-row'>
            <input
              type='checkbox'
              name='skills'
              id='JAVA'
              checked={skills.includes('JAVA')}
              onChange={() => handleSkillChange('JAVA')}
            />
            <label htmlFor='JAVA'>JAVA</label>
          </div>
          <div className='input-row'>
            <input
              type='checkbox'
              name='skills'
              id='CSS'
              checked={skills.includes('CSS')}
              onChange={() => handleSkillChange('CSS')}
            />
            <label htmlFor='CSS'>CSS</label>
          </div>
          <div className='buttons'>
            <button className='enroll' onClick={handleEnroll}>
              Enroll
            </button>
            <button className='clear' onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <div className='right'>
          <h3>Enrolled Students</h3>
          <table border='1px'>
            <thead>
              <tr>
                <th>DESCRIPTION</th>
                <th>IMAGE</th>
              </tr>
            </thead>
            <tbody>
              {enrolledStudents.map((student, index) => (
                <tr key={index}>
                  <td>
                    {student.name} <br />
                    {student.email} <br />
                    <a href={student.website} target="_blank" rel="noopener noreferrer">{student.website}</a> <br />
                    {student.gender} <br />
                    {student.skills.join(', ')}
                  </td>
                  <td className='image-cell'>
                    {student.image && (
                      <img src={student.image} alt='Student' style={{ width: '100px' }} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
