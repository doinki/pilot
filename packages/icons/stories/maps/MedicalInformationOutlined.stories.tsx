import type { Meta, StoryObj } from '@storybook/react';

import MedicalInformationOutlined from '../../lib/maps/MedicalInformationOutlined';

const meta: Meta<typeof MedicalInformationOutlined> = {
  component: MedicalInformationOutlined,
  tags: ['autodocs'],
  title: 'maps/MedicalInformationOutlined',
};

export default meta;
type Story = StoryObj<typeof MedicalInformationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
