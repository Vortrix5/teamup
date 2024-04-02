<template>
  <v-row>
    <v-col md="6">
      <v-card 
      style="margin: 10px; padding: 10px;">
        <v-card-title>
          Monthly Earnings
        </v-card-title>
        <v-divider
        style="margin-bottom: 10px"
        ></v-divider>
        <v-card-subtitle
        style="color: green"
        >
          <strong>+ 45% (This month: starting from 1st March 2024)</strong>
        </v-card-subtitle>
        <v-card-text>
          950$
        </v-card-text>
      </v-card>
      <v-card
      style="margin: 10px; padding: 10px">
        <v-card-title>
          Yearly Earnings
        </v-card-title>
        <v-divider
        style="margin-bottom: 10px"
        ></v-divider>
        <v-card-subtitle
        style="color: green"
        >
          <strong>+ 30% (This year: starting from 1st January 2024)</strong>
        </v-card-subtitle>
        <v-card-text>
          6000$
        </v-card-text>
      </v-card>
      <v-card
      style="margin: 10px; padding: 10px">
        <v-card-title>
          Overall Earnings
        </v-card-title>
        <v-divider
        style="margin-bottom: 10px"
        ></v-divider>
        <v-card-subtitle
        style="color: green"
        >
          <strong>+ 25% (Starting from 21st March 2015)</strong>
        </v-card-subtitle>
        <v-card-text>
          101230$
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-card
      style="margin: 10px"
      >
        <v-card-text>
          <v-data-table-virtual
          :headers="headers"
          :items="listCompanies"
          height="auto"
          width="auto"
          item-value="name"
          ></v-data-table-virtual>
        </v-card-text>
      </v-card> 
      <v-card
      style="margin: 10px; padding: 10px;"
      >
        <v-card-title>
          Recent payements (Last 7 days)
        </v-card-title>
        <v-divider
        style="margin-bottom: 10px;"
        ></v-divider>
        <v-card-subtitle
        style="color: green"
        >
          <strong>+10% compared to the payement of the previous 7 days</strong>
        </v-card-subtitle>
        <v-card-text>
          2800$
        </v-card-text>
      </v-card>  
    </v-col>
  </v-row>
</template>


<script>
  export default{
    data(){
      return{
        headers: [
            { title: 'Company', align: 'start', key: 'company' },
            { title: 'Manager ID', align: 'center', key: 'manager' },
            { title: 'Number of team Members', align: 'center', key: 'nbr' },
            { title: 'Payement', align: 'center', key: 'value'}
          ],
          companies: [
            {
              company: 'Khole',
              manager: '0001',
              nbr: 5,
              value: '500$',
            },
            {
              company: 'MacroHard',
              manager: '0005',
              nbr: 10,
              value: '1000$',
            },
            {
              company: 'EBN',
              manager: '0011',
              nbr: 6,              
              value: '600$',
            },
            {
              company: 'Emtel',
              manager: '0016',
              nbr: 7,
              value: '700$',
            },
            
          ],
        }
      },
      computed:{
        listCompanies() {
          const nbr = this.companies.length
          return [...Array(nbr).keys()].map(i => {
            const company = { ...this.companies[i] }
            company.name = `${company.name}`
            return company
          })
        },
      },

  }
</script>