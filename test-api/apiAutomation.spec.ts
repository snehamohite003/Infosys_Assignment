import { test, expect } from '@playwright/test';
import { createUserBody,updateUserBody } from './testData/apiTestBodyData';


test.describe('Polestar Automation Script- Sanity Test Landing Page', () => {

test('T001 Verify api of Multiple user details', async({page})=>{
  // Perform an HTTP GET request to the API endpoint
  const response = await page.request.get('https://reqres.in/api/users?page=1'); 


  if (response.ok()) {
      // Parse the response as JSON
      const data = await response.json();

      // Log the data to the console if you want to store data
    //   console.log(data);

      console.log("Working fine");
  } else {
      console.error(`Request failed with status ${response.status()}`);
  }

  })

  test('T002 Verify api of Single user details', async({page})=>{
  

    const response = await page.request.get('https://reqres.in/api/users/2'); 
  
   
    if (response.ok()) {
        // Parse the response as JSON if you want to store data
        // const data = await response.json();
  
        console.log("Working fine");
    } else {
        console.error(`Request failed with status ${response.status()}`);
    }
  
    })

    test('T003 Verify api when No user present', async({page})=>{
  
        const response = await page.request.get('https://reqres.in/api/users/23'); 
      
        if (response.status()==404) {
            // Parse the response as JSON if you want to store data
            // const data = await response.json();
      
            console.log("Working fine");
        } else {
            console.error(`Request failed with status ${response.status()}`);
        }
      
     })

     test('T004 Verify api to create user', async({page})=>{
  
            const response = await page.request.post('https://reqres.in/api/users', {
                data: createUserBody
            });
            if (response.status()==201) {
                // Parse the response as JSON
                // const responseData = await response.json();
                // console.log(responseData);
                console.log("User got created");
            } else {
                console.error(`Request failed with status ${response.status()}`);
            }
          
     })

    test('T005 Verify api to update user details', async({page})=>{
  
                const response = await page.request.put('https://reqres.in/api/users/2', {
                    data: updateUserBody
                });
                if (response.status()==200) {
                    // Parse the response as JSON
                    // const responseData = await response.json();
            
                    // // Log the response data to the console
                    // console.log(responseData);
                    console.log("User details updated");
                } else {
                    console.error(`Request failed with status ${response.status()}`);
                }
              
    })

    test('T006 Verify api to delete user details', async({page})=>{
  
                    const response = await page.request.delete('https://reqres.in/api/users/2');
                    if (response.status()==200) {
                        console.log("User deleted Sucssessfully");

                    } 
                    else if(response.status()==204)
                    {
                        console.log("User deleted Sucssessfully but no additional result to show");
                    }
                    else {
                        console.error(`Request failed with status ${response.status()}`);
                    }
                  
    })

 })
