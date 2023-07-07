import type { Meta, StoryObj } from '@storybook/react';

import MarkEmailReadOutlined from '../../lib/communication/MarkEmailReadOutlined';

const meta: Meta<typeof MarkEmailReadOutlined> = {
  component: MarkEmailReadOutlined,
  tags: ['autodocs'],
  title: 'communication/MarkEmailReadOutlined',
};

export default meta;
type Story = StoryObj<typeof MarkEmailReadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
