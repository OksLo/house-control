import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface IAccount {
  roomNumber: string;
  porch: number;
  floor: number;
  space: number;
  cadastralNumber: string;
  dateStatement: string;
  owner: string;
  dateOwnership: string;
  isPropertyCommon: boolean;
  note: string;
  telegram: string;
  phoneNumber: number;
}

export const useAccountsStore = defineStore('accountsStore', () => {
  const accounts = ref<IAccount[]>([]);

  async function getAccounts() {
    const response = await fetch('http://localhost:3000/v1/api/accounts');
    if (response.ok) { // if HTTP-status is 200-299
                       // get the response body (the method explained below)
      accounts.value = await response.json();
      console.log('[getAccounts] accounts: ', accounts.value);
    }
  }

  return { accounts, getAccounts }
})
