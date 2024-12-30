import React from 'react';
import './Slambook.css';

const Slambook = () => {
  return (
    <>
      <div className="box">
        <fieldset>
            
            <legend>SLAMBOOK</legend>
            <form action="#">
            <div className="form-group">
                <label htmlFor="name">NAME :</label>
                <input type="text" id="name" class="un"/>
            </div>

            <div className="form-group">
                <label htmlFor="nckname">NICKNAME :</label>
                <input type="text" id="nckname" class="un"/>
            </div>

            <div className="form-group">
                <label htmlFor="add">ADDRESS :</label>
                <input type="text" id="add" class="un"/>
            </div>

            <div className="form-group">
                <label htmlFor="phno">PHONE :</label>
                <input type="text" id="phno" class="un"/>
            </div>

            <div className="form-group">
                <label htmlFor="mem">MEMORIES :</label>
                <textarea id="mem" class="un"></textarea>
            </div>

            <div className="form-group">
                <label>GENDER :</label>
                <div className="radio-group">
                    <input type="radio" id="male" value="male" name="gender" />
                    <label >Male</label>
                    <input type="radio" name="gender" />
                    <label>Female</label>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="actor">FAV ACTOR :</label>
                <textarea id="actor" class="un"></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="school">SCHOOL :</label>
                <select id="school">
                <option value="svb">SVB</option>
                <option value="bvb">BVB</option>
                </select>
            </div>

            <div className="form-group">
                <div className="btnbox">
                    <button className="btn">Submit</button>
                </div>
                
            </div>
            </form>
        </fieldset>
      </div>
    </>
  );
};

export default Slambook;
