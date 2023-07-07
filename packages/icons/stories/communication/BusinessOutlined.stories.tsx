import type { Meta, StoryObj } from '@storybook/react';

import BusinessOutlined from '../../lib/communication/BusinessOutlined';

const meta: Meta<typeof BusinessOutlined> = {
  component: BusinessOutlined,
  tags: ['autodocs'],
  title: 'communication/BusinessOutlined',
};

export default meta;
type Story = StoryObj<typeof BusinessOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
