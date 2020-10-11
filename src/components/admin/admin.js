import { DeleteOutlined, EditOutlined, UserAddOutlined } from '@ant-design/icons';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Search from 'antd/lib/input/Search';
import React, { useEffect, useState } from 'react';
import AddNewEmployee from './add-employee';
import EditDataEmployee from './edit-employee';
import Fuse from 'fuse.js';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { addData, deleteData, editData, requestApiData } from '../../redux/actions';

export const Admin = () => {

  const { isAuthenticated } = useAuth0();
  const [isModal, setIsModal] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState();
  const data = useSelector(state => state.getDataReducer.employees);
  const [dataEmployee, setDataEmployee] = useState(data);
  const dataSearch = useSelector(state => state.getDataReducer.search);
  const [listSearch,setDataSearch] = useState(dataSearch);
  const [selectionType] = useState('checkbox');
  const dispatch = useDispatch();

  const deleteTodo = (todo) => {
    dispatch(deleteData(todo.id));
    NotificationManager.error('Xóa thành công', 'Thông báo!');
  }

  const OpenModalEdit = (e) => {
    setDataEdit(e)
    setIsModalEdit(true)
  }

  const CanCleModalEdit = () => {
    setIsModalEdit(false)
  }

  const handleOK = () => {
    setIsModalEdit(false)
  }
  const columns = [
    {
      key: 2,
      title: 'Code',
      dataIndex: 'code',
      },
    {
    key: 3,
    title: 'Name',
    dataIndex: 'name',
    defaultSortOrder: 'descend',
    sorter: (a, b) => {
      if(a.name<b.name){
        return 1;
      }
      else if(a.name>b.name){
        return -1;
      }}
    },
    {
    key: 4,
    title: 'Date of birth',
    dataIndex: 'birth',
    sorter: (a, b) => {
      if(a.birth>b.birth){
        return 1;
      }
      else if(a.birth<b.birth){
        return -1;
      }}
    },
    {
    key: 5,
    title: 'Address',
    dataIndex: 'address',
    },
    {
    key: 6,
    title: 'Company',
    dataIndex: 'company',
    },
    {
    key: 7,
    title: 'Description',
    dataIndex: 'description',
    },
    {
      key: 8,
      title: 'Action',
      dataIndex: 'action',
      render: (text, record, index) => <div>
        <div className="icons-list"><Button type="primary"  onClick={() => OpenModalEdit(record)} style = {{marginRight: "1%"}}>Edit<EditOutlined /></Button><Button type="danger" onClick = {() => {deleteTodo(record)} } >Delete<DeleteOutlined /></Button></div>
      </div>
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

  function onChange( sorter) {
  }

  useEffect( () => {
    if (isAuthenticated === true) {
      dispatch(requestApiData())
    }
    else return;
  }, [dispatch, isAuthenticated]);
  
  useEffect(()=> {
     setDataEmployee(data);
  },[data]);
  
  useEffect(()=> {
    setDataSearch(dataSearch)
 },[dataSearch])
  const showModal = () => {
    setIsModal(true);
  };

  const handleOk = e => {
    setIsModal(false)
  };
  const handleCancel = e => {
    setIsModal(false)
  };
  const AddEmployee = (dataNew) => {
    dispatch(addData(dataNew));
    handleCancel();
    NotificationManager.success('Thêm thành công', 'Thông báo!');
  }
  const EditEmployee = (data, id) => {
    dispatch(editData(data, id))
    NotificationManager.info('Sửa thành công', 'Thông báo!');
  }
  
  const handleOnchange = (e) => {
    if (e === '') {
      dispatch(requestApiData())
    }
    
  }
  const handleSearch = (e) => {
    const options = {
      includeScore: true,
      keys: ['name']
    }  
    const fuse = new Fuse(listSearch, options) 
    const result = fuse.search(e);
    const listResult = [];
    listResult.push(result.map(el=>el.item)); 
    setDataEmployee(listResult[0]);
  }
  return (
    <>
      { isAuthenticated ? (
        <div className="admin">
          <div className="d-flex justify-content-between ">
            <div className="admin-button">
              <Search className="search" placeholder="input search text" onChange={(e) => handleOnchange(e.target.value)} onSearch={(e) => handleSearch(e)} style = {{ padding: "0 40% 0 1%"}} enterButton />
              <Button className="add" onClick={showModal} type="primary"><UserAddOutlined /> Add New Employee</Button>
            </div>
            <NotificationContainer />
            { isModal === true ? <AddNewEmployee AddEmployee={AddEmployee} isModal={isModal} handleOk={handleOk} handleCancel={handleCancel} /> : ''}
          </div>
          <h1>Danh sách nhân viên</h1>
          <div className="mt-4">
            <Table rowSelection={{
                type: selectionType,
                ...rowSelection,
              }}
              columns={columns}
              expandable={{
                expandedRowRender: record => <div><p style={{ margin: 0 }}>Mã nhân viên {record.code} tên {record.name} sinh vào ngày {record.birth}, hiện tại đang sinh sống tại {record.address} và làm việc tại công ty {record.company} </p><p>Mô tả: {record.description}</p></div>
              }} dataSource={dataEmployee} size="middle" onChange={onChange}  style={{ width: 1100, paddingLeft: "2%" }} />
          </div>
          { isModalEdit === true ? <EditDataEmployee data={dataEdit} isModalEdit={isModalEdit} CanCleModalEdit={CanCleModalEdit} handleOK={handleOK} EditEmployee={EditEmployee} /> : ''}
        </div>
      ) : ('')}
    </>
  )
}
export default React.memo(Admin);
