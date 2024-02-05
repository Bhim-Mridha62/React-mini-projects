import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function BootstarpTutorial() {
    return (
        <>
            <h1>BootStarp Grid</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col bg-primary">
                        Header
                    </div>
                </div>
                <div className="bg-danger row">
                    <ul>
                        <a href="example.com" style={{ padding: '10px' }}>home</a>
                        <a href="example.com" style={{ padding: '10px' }}>About</a>
                        <a href="example.com" style={{ padding: '10px' }}>Contact</a>
                        <a href="example.com" style={{ padding: '10px' }}>product</a>
                    </ul>
                </div>
                <div className="row">
                    <div className="bg-success col-9" >
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis earum eveniet officia aliquam totam ad amet sunt exercitationem harum vel cupiditate in alias eaque voluptatem reiciendis non, natus inventore. Ut similique ullam, consectetur nemo voluptas aliquam quas, ad doloribus praesentium possimus at dolor deserunt. Expedita recusandae rem aliquam deserunt autem quo, facilis corporis, ducimus, amet ad consequuntur! Cum quaerat odio qui quis doloremque! Voluptas deserunt itaque modi corrupti aliquam assumenda! Perspiciatis consectetur dolorum, voluptate culpa ex rerum repellat perferendis autem?ab asperiores soluta natus! Reprehenderit modi exercitationem veritatis vel perspiciatis, recusandae veniam, animi nulla voluptatibus unde odio numquam ducimus provident pariatur. Sunt quia ab impedit vero quam quibusdam molestiae architecto animi quae cupiditate alias enim, officiis tempore, voluptatem eaque quo quisquam fuga voluptas, dolores facilis minima distinctio nihil libero! Delectus recusandae ipsum, accusamus placeat quam nisi minima omnis illum, totam tempora dolore veritatis quis quasi. Exercitationem facere blanditiis incidunt voluptates repellat qui aliquid distinctio perferendis, ea consectetur, nemo ex corporis inventore, dolor repudiandae recusandae porro beatae labore vitae quos vero velit?</p>
                    </div>
                    <div className="bg-info col-3" >
                        <p >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, doloremque modi sint consectetur odit aspernatur totam commodi, similique qui laboriosam velit recusandae nesciunt nostrum omnis officia accusamus odio pariatur doloribus quam rem repellendus, ab minima culpa! Quisquam beatae harum aliquid exercitationem debitis consequatur quas voluptas quasi, blanditiis sapiente facere vero tempore aperiam, modi nihil rem itaque. Voluptatum, velit voluptas. Sed laborum obcaecati consequuntur, optio ipsam adipisci consequatur quaerat debitis dignissimos quae dolore magnam ea placeat officiis modi, aperiam atque ab omnis non. Omnis similique autem beatae reiciendis! Modi nam, illo ullam in, eum rerum laborum, omnis molestias unde officiis excepturi.
                        </p>
                    </div>
                </div>
                <div className="bg-warning row">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam reprehenderit, distinctio corporis tempora id provident fugiat dicta pariatur nemo beatae eveniet ipsam atque inventore sint similique cumque quas laboriosam </p>
                </div>
            </div>

            <h1>Offset for for gap and offset-md-2 use for disable offset after md size </h1>
            <div className="bg-secondary row">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint accusamus, facere eum repellendus dolore est consectetur provident consequuntur delectus tenetur eos! Officia, consectetur dignissimos ratione temporibus asperiores blanditiis sunt minima, quam deserunt dicta quasi laboriosam odio soluta aliquam, autem expedita! Dolor quidem voluptate perferendis maxime quo libero eveniet provident aperiam!
                <div className="row">
                    {/* <div class="col bg-primary">1Lorem ipsum dolor sit amet consectetur</div>
                    <div class="col bg-secondary">2Lorem ipsum dolor sit amet consectetur</div>
                    <div class="col bg-success">3Lorem ipsum dolor sit amet consectetur</div> */}
                    <div className="col offset-3 bg-danger">4Lorem ipsum dolor sit amet consectetur</div>
                    <div className="col bg-warning">5Lorem ipsum dolor sit amet consectetur</div>
                    <div className="col bg-info">6Lorem ipsum dolor sit amet consectetur</div>
                    <div className="col bg-light">7Lorem ipsum dolor sit amet consectetur</div>
                    <div className="col bg-dark">8Lorem ipsum dolor sit amet consectetur</div>
                    {/* <div className="col bg-primary">9Lorem ipsum dolor sit amet consectetur</div>
                    <div className="col bg-secondary">10Lorem ipsum dolor sit amet consectetur</div> */}
                    <div className="col offset-md-2 bg-success">11Lorem ipsum dolor sit amet consectetur</div>
                    <div className="col bg-danger">12Lorem ipsum dolor sit amet consectetur</div>
                </div>

            </div>
        </>
    )
}

export default BootstarpTutorial
