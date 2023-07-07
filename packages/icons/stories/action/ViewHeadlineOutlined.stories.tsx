import type { Meta, StoryObj } from '@storybook/react';

import ViewHeadlineOutlined from '../../lib/action/ViewHeadlineOutlined';

const meta: Meta<typeof ViewHeadlineOutlined> = {
  component: ViewHeadlineOutlined,
  tags: ['autodocs'],
  title: 'action/ViewHeadlineOutlined',
};

export default meta;
type Story = StoryObj<typeof ViewHeadlineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
