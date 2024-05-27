(async () => {
    const fetch = (await import('node-fetch')).default;
  
    const makeApiCall = async () => {
      try {
        const response = await fetch('https://carapi.app/api/makes?year=2000', {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjYXJhcGkuYXBwIiwic3ViIjoiMWIxZWYzZjAtODdkMS00MTkyLWJkODEtZjQzNTgyZTUwMjE5IiwiYXVkIjoiMWIxZWYzZjAtODdkMS00MTkyLWJkODEtZjQzNTgyZTUwMjE5IiwiZXhwIjoxNzE3Mzg4NTcwLCJpYXQiOjE3MTY3ODM3NzAsImp0aSI6IjdkOWY1MTNkLWI5ZWUtNDZjOS1iMzRhLTY5ODg4ZjEyNGNlYyIsInVzZXIiOnsic3Vic2NyaWJlZCI6ZmFsc2UsInN1YnNjcmlwdGlvbiI6bnVsbCwicmF0ZV9saW1pdF90eXBlIjoiaGFyZCIsImFkZG9ucyI6eyJhbnRpcXVlX3ZlaGljbGVzIjpmYWxzZSwiZGF0YV9mZWVkIjpmYWxzZX19fQ.ITx8Ub1F0JDOzJrhBWeL2pffKDo_UEZGhouKIGApdcw'
          }
        });
  
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    makeApiCall();
  })();
  