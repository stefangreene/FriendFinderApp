
document.addEventListener("DOMContentLoaded", () => {
    let submit = document.querySelector("#submit");
    let url = '/api/friends';
    
    let fetchData = async () => {
    
      let q1 = document.querySelector("#q1").value;
      let q2 = document.querySelector("#q2").value;
      let q3 = document.querySelector("#q3").value;
      let q4 = document.querySelector("#q4").value;
      let q5 = document.querySelector("#q5").value;
      let q6 = document.querySelector("#q6").value;
      let q7 = document.querySelector("#q7").value;
      let q8 = document.querySelector("#q8").value;
      let q9 = document.querySelector("#q9").value;
      let q10 = document.querySelector("#q10").value;
    
    let scores = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
        let res = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:  document.querySelector("#name").value,
                photo: document.querySelector("#photo").value,
                scores: scores
    
            }) 
        });
        let json = await res.json();
        console.log(json);
        let html = `
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h3 class="modal-title">Your New Best Friend</h1>
                </div>
                <div class="modal-body">
                  <h2 id="bestFriend""> ${json.name} </h2>
                  <img id="bestFriendPhoto" src="${json.photo}" style="width:100%;" />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div> 
        `;
        document.querySelector('#bestFriendModal').innerHTML = html;
    };
    
    submit.addEventListener('submit', (e) => {
        e.preventDefault();
        fetchData();
        console.log('data fetched')
        $("#bestFriendModal").modal("toggle");
    });
    
    });
    