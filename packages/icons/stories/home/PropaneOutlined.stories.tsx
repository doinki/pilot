import type { Meta, StoryObj } from '@storybook/react';

import PropaneOutlined from '../../lib/home/PropaneOutlined';

const meta: Meta<typeof PropaneOutlined> = {
  component: PropaneOutlined,
  tags: ['autodocs'],
  title: 'home/PropaneOutlined',
};

export default meta;
type Story = StoryObj<typeof PropaneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
