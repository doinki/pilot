import type { Meta, StoryObj } from '@storybook/react';

import ContactMailOutlined from '../../lib/communication/ContactMailOutlined';

const meta: Meta<typeof ContactMailOutlined> = {
  component: ContactMailOutlined,
  tags: ['autodocs'],
  title: 'communication/ContactMailOutlined',
};

export default meta;
type Story = StoryObj<typeof ContactMailOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
