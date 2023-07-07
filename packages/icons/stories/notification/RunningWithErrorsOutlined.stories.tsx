import type { Meta, StoryObj } from '@storybook/react';

import RunningWithErrorsOutlined from '../../lib/notification/RunningWithErrorsOutlined';

const meta: Meta<typeof RunningWithErrorsOutlined> = {
  component: RunningWithErrorsOutlined,
  tags: ['autodocs'],
  title: 'notification/RunningWithErrorsOutlined',
};

export default meta;
type Story = StoryObj<typeof RunningWithErrorsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
