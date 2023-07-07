import type { Meta, StoryObj } from '@storybook/react';

import FrontHandOutlined from '../../lib/social/FrontHandOutlined';

const meta: Meta<typeof FrontHandOutlined> = {
  component: FrontHandOutlined,
  tags: ['autodocs'],
  title: 'social/FrontHandOutlined',
};

export default meta;
type Story = StoryObj<typeof FrontHandOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
