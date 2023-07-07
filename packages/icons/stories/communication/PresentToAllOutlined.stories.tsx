import type { Meta, StoryObj } from '@storybook/react';

import PresentToAllOutlined from '../../lib/communication/PresentToAllOutlined';

const meta: Meta<typeof PresentToAllOutlined> = {
  component: PresentToAllOutlined,
  tags: ['autodocs'],
  title: 'communication/PresentToAllOutlined',
};

export default meta;
type Story = StoryObj<typeof PresentToAllOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
