import React, { useState } from 'react'
import './ProfileOverview.css'
import SelectVariants from '../StylingComponents/DropDownstyle'
import { MdModeEdit } from 'react-icons/md';
import MinHeightTextarea from '../StylingComponents/textarea';
import { AiOutlinePlus } from 'react-icons/ai'
import MultipleSelectChip from '../StylingComponents/DropDownchips';
import BasicButtons from '../StylingComponents/Editbtn';
import ProfileEducation from './ProfileEducation';

export const ProfileOverview = () => {

    const [trig, settrig] = useState(true);
    const [change, setchange] = useState(false);

    const works = ["Auto Care", "Banquets", "Book Hotel"];

    const show = () => {
        settrig(!trig)
    }
    const show1 = () => {
        setchange(!change)
        // console.log(change)
    }

    return (
        <div className='_ProfileOverviewMenu'>
            <div className='_ProfileOverviewBiomaindiv'>
                <div className='_ProfileOverview'>
                    <SelectVariants label={"Choose Category"} variant={"standard"} data={works} width={"80%"} />
                    <div className='_ProfileOverviewBioOption'>
                        <div>Bio</div>
                        <div onClick={show}>
                            {trig ? <BasicButtons icon={<MdModeEdit style={{ fontSize: "20px" }} />} backgroundColor={"#004788"} width={"90px"} label={"Edit"} variant={"contained"} /> : <BasicButtons width={"90px"} label={"Save"} variant={"contained"} backgroundColor={"#004788"} />}
                        </div>
                    </div>
                    <div className='_ProfileOverviewBio'>
                        {trig ? "" : <MinHeightTextarea fontSize={"18px"} rows={1} borderRadius={"12px"} placeholder={"Type Your Bio"}
                            fontFamily={"sans-serif"} width={"99%"} outline={"none"} marginTop={"-10px"} height={"50px"}
                            border={"1px solid grey"} />}
                    </div>
                    <div className='_ProfileOverviewSkills'>
                        <div>Skills</div>
                        <div onClick={show1}>
                            {
                                change ? <BasicButtons backgroundColor={"#004788"} width={"90px"} label={"Save"} variant={"contained"} /> : <BasicButtons icon={<AiOutlinePlus style={{ fontSize: "20px" }} />} width={"90px"} label={"Add"} variant={"contained"} backgroundColor={"#004788"} />
                            }
                        </div>
                    </div>
                    <div className='_ProfileOverviewSkillsinput'>
                        {
                            change ? <MultipleSelectChip label={"Skills"} placeholder={"Enter Skills"} width={"100%"} /> : ""
                        }
                    </div>
                </div>
            </div>
            <ProfileEducation />
        </div>
    )
}
