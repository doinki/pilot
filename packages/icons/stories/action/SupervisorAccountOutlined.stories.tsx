import type { Meta, StoryObj } from '@storybook/react';

import SupervisorAccountOutlined from '../../lib/action/SupervisorAccountOutlined';

const meta: Meta<typeof SupervisorAccountOutlined> = {
  component: SupervisorAccountOutlined,
  tags: ['autodocs'],
  title: 'action/SupervisorAccountOutlined',
};

export default meta;
type Story = StoryObj<typeof SupervisorAccountOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
