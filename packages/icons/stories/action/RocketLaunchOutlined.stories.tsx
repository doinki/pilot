import type { Meta, StoryObj } from '@storybook/react';

import RocketLaunchOutlined from '../../lib/action/RocketLaunchOutlined';

const meta: Meta<typeof RocketLaunchOutlined> = {
  component: RocketLaunchOutlined,
  tags: ['autodocs'],
  title: 'action/RocketLaunchOutlined',
};

export default meta;
type Story = StoryObj<typeof RocketLaunchOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
