import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, Platform } from 'react-native';
import { Calendar, Clock } from 'lucide-react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DatePickerProps {
  label: string;
  value: Date;
  onChange: (date: Date) => void;
  mode?: 'date' | 'time' | 'datetime';
}

export default function DatePicker({
  label,
  value,
  onChange,
  mode = 'date',
}: DatePickerProps) {
  const [show, setShow] = useState(false);
  const [tempDate, setTempDate] = useState(value);
  const [currentMode, setCurrentMode] = useState<'date' | 'time'>(
    mode === 'datetime' ? 'date' : mode
  );

  const showPicker = () => {
    setShow(true);
  };

  const handleChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShow(false);
    }

    if (selectedDate) {
      setTempDate(selectedDate);
      
      if (mode === 'datetime' && currentMode === 'date') {
        setCurrentMode('time');
        if (Platform.OS === 'ios') {
          return;
        } else {
          setShow(true);
        }
      } else {
        onChange(selectedDate);
        setCurrentMode(mode === 'datetime' ? 'date' : mode);
      }
    }
  };

  const confirmIOSPicker = () => {
    onChange(tempDate);
    setShow(false);
    setCurrentMode(mode === 'datetime' ? 'date' : mode);
  };

  const cancelIOSPicker = () => {
    setShow(false);
    setCurrentMode(mode === 'datetime' ? 'date' : mode);
  };

  const formatDate = (date: Date) => {
    if (mode === 'date') {
      return date.toLocaleDateString();
    } else if (mode === 'time') {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })}`;
    }
  };

  const renderIcon = () => {
    if (mode === 'date') {
      return <Calendar size={20} color="#BB86FC" />;
    } else if (mode === 'time') {
      return <Clock size={20} color="#BB86FC" />;
    } else {
      return currentMode === 'date' ? (
        <Calendar size={20} color="#BB86FC" />
      ) : (
        <Clock size={20} color="#BB86FC" />
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.input} onPress={showPicker}>
        <Text style={styles.inputText}>{formatDate(value)}</Text>
        {renderIcon()}
      </TouchableOpacity>

      {Platform.OS === 'android' && show && (
        <DateTimePicker
          value={tempDate}
          mode={currentMode}
          is24Hour={true}
          onChange={handleChange}
        />
      )}

      {Platform.OS === 'ios' && (
        <Modal
          visible={show}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <TouchableOpacity onPress={cancelIOSPicker}>
                  <Text style={styles.modalCancel}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={confirmIOSPicker}>
                  <Text style={styles.modalConfirm}>Confirm</Text>
                </TouchableOpacity>
              </View>
              <DateTimePicker
                value={tempDate}
                mode={currentMode}
                is24Hour={true}
                display="spinner"
                onChange={handleChange}
                style={styles.picker}
              />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 8,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(30, 27, 75, 0.6)',
    borderWidth: 1,
    borderColor: 'rgba(187, 134, 252, 0.3)',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  inputText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#1E1B4B',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  modalCancel: {
    color: '#CF6679',
    fontSize: 16,
  },
  modalConfirm: {
    color: '#BB86FC',
    fontSize: 16,
    fontWeight: '600',
  },
  picker: {
    height: 200,
  },
});