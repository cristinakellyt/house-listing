<template>
  <div class="house-details__container">
    <div>
      <div class="back-to-house-list">
        <img src="./../components/icons/ic_back_grey@3x.png" alt="" class="back-icon" />
        <p>Back to overview</p>
      </div>

      <div class="house-details">
        <img src="./../components/icons/img_placeholder_house@3x.png" alt="" />
        <div class="flex-column">
          <div class="house-details--title">
            <h1>Street Name</h1>
            <div class="flex">
              <img src="./../components/icons/ic_edit@3x.png" width="24" height="24" />
              <img src="./../components/icons/ic_delete@3x.png" width="24" height="24" />
            </div>
          </div>

          <div class="detail-grouped">
            <img src="./../components/icons/ic_location@3x.png" width="16" height="20" />
            <p>1011 AA Amsterdam</p>
          </div>

          <div class="flex">
            <div class="detail-grouped">
              <img src="./../components/icons/ic_price@3x.png" width="20" height="20" />
              <p>500.000</p>
            </div>

            <div class="detail-grouped">
              <img src="./../components/icons/ic_size@3x.png" width="20" height="20" />
              <p>120 m2</p>
            </div>

            <div class="detail-grouped">
              <img src="./../components/icons/ic_construction_date@3x.png" width="20" height="20" />
              <p>Built in 1990</p>
            </div>
          </div>

          <div class="flex">
            <div class="detail-grouped">
              <img src="./../components/icons/ic_bed@3x.png" width="20" height="20" />
              <p>1</p>
            </div>

            <div class="detail-grouped">
              <img src="./../components/icons/ic_bath@3x.png" width="20" height="20" />
              <p>120 m2</p>
            </div>

            <div class="detail-grouped">
              <img src="./../components/icons/ic_garage@3x.png" width="20" height="20" />
              <p>Yes</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore dolorum earum officiis
            ducimus asperiores non, culpa dignissimos perferendis aspernatur deleniti a corporis ea
            praesentium ipsam alias itaque inventore? Dolores, maiores? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Magnam cum voluptates repudiandae. Quas doloremque aliquid
            illo, voluptate quae temporibus alias quisquam, corrupti sed corporis repudiandae,
            praesentium suscipit expedita itaque neque.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.house-details__container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  /* max-width: 60%; */
  margin: calc((40 / 16) * 1rem) 0;
}

.back-to-house-list {
  display: flex;
  align-items: center;
  gap: 15px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: var(--r16);
  margin-bottom: 30px;
}

.back-to-house-list p {
  color: var(--text-color-primary);
}

.back-icon {
  width: var(--r20);
  height: var(--r20);
}

.house-details--title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.house-details {
  background-color: var(--element-color-backgroun2);
  padding-bottom: 40px;
}
.flex-column {
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 30px auto 0 auto;
  gap: 20px;
}

.detail-grouped {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--element-color-secondary);
  font-weight: 600;
  font-size: var(--r16);
}

/* .detail-grouped img {
  width: 16px;
  height: 20px;
} */

.flex {
  display: flex;
  gap: 30px;
}
</style>
