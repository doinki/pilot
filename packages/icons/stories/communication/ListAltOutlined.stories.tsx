import type { Meta, StoryObj } from '@storybook/react';

import ListAltOutlined from '../../lib/communication/ListAltOutlined';

const meta: Meta<typeof ListAltOutlined> = {
  component: ListAltOutlined,
  tags: ['autodocs'],
  title: 'communication/ListAltOutlined',
};

export default meta;
type Story = StoryObj<typeof ListAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
