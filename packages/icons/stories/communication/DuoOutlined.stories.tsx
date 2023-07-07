import type { Meta, StoryObj } from '@storybook/react';

import DuoOutlined from '../../lib/communication/DuoOutlined';

const meta: Meta<typeof DuoOutlined> = {
  component: DuoOutlined,
  tags: ['autodocs'],
  title: 'communication/DuoOutlined',
};

export default meta;
type Story = StoryObj<typeof DuoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
