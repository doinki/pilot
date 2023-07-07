import type { Meta, StoryObj } from '@storybook/react';

import SingleBedOutlined from '../../lib/social/SingleBedOutlined';

const meta: Meta<typeof SingleBedOutlined> = {
  component: SingleBedOutlined,
  tags: ['autodocs'],
  title: 'social/SingleBedOutlined',
};

export default meta;
type Story = StoryObj<typeof SingleBedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
