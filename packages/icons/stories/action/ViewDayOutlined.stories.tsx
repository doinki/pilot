import type { Meta, StoryObj } from '@storybook/react';

import ViewDayOutlined from '../../lib/action/ViewDayOutlined';

const meta: Meta<typeof ViewDayOutlined> = {
  component: ViewDayOutlined,
  tags: ['autodocs'],
  title: 'action/ViewDayOutlined',
};

export default meta;
type Story = StoryObj<typeof ViewDayOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
