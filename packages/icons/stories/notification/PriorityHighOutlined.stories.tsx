import type { Meta, StoryObj } from '@storybook/react';

import PriorityHighOutlined from '../../lib/notification/PriorityHighOutlined';

const meta: Meta<typeof PriorityHighOutlined> = {
  component: PriorityHighOutlined,
  tags: ['autodocs'],
  title: 'notification/PriorityHighOutlined',
};

export default meta;
type Story = StoryObj<typeof PriorityHighOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
