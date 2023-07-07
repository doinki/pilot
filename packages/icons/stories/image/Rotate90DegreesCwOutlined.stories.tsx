import type { Meta, StoryObj } from '@storybook/react';

import Rotate90DegreesCwOutlined from '../../lib/image/Rotate90DegreesCwOutlined';

const meta: Meta<typeof Rotate90DegreesCwOutlined> = {
  component: Rotate90DegreesCwOutlined,
  tags: ['autodocs'],
  title: 'image/Rotate90DegreesCwOutlined',
};

export default meta;
type Story = StoryObj<typeof Rotate90DegreesCwOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
