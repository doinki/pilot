import type { Meta, StoryObj } from '@storybook/react';

import UnfoldLessDoubleOutlined from '../../lib/action/UnfoldLessDoubleOutlined';

const meta: Meta<typeof UnfoldLessDoubleOutlined> = {
  component: UnfoldLessDoubleOutlined,
  tags: ['autodocs'],
  title: 'action/UnfoldLessDoubleOutlined',
};

export default meta;
type Story = StoryObj<typeof UnfoldLessDoubleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
