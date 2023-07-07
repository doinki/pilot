import type { Meta, StoryObj } from '@storybook/react';

import PowerOutlined from '../../lib/notification/PowerOutlined';

const meta: Meta<typeof PowerOutlined> = {
  component: PowerOutlined,
  tags: ['autodocs'],
  title: 'notification/PowerOutlined',
};

export default meta;
type Story = StoryObj<typeof PowerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
