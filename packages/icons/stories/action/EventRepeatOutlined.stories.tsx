import type { Meta, StoryObj } from '@storybook/react';

import EventRepeatOutlined from '../../lib/action/EventRepeatOutlined';

const meta: Meta<typeof EventRepeatOutlined> = {
  component: EventRepeatOutlined,
  tags: ['autodocs'],
  title: 'action/EventRepeatOutlined',
};

export default meta;
type Story = StoryObj<typeof EventRepeatOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
