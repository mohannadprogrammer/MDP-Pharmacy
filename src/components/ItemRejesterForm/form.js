import React from 'react';

function form() {
    return (
        <div>
            <form >
                <label>
                    Trad Name:
          <input type="text" />
                </label>

                <label>
                    General Name:
          <input type="text" />
                </label>

                <input type="submit" value="Submit" />
            </form>
        </div>

    )

}

export default form;